import { useEffect, useRef, useCallback } from 'react';
import { debounce } from '@/lib/utils';

interface UseAutoSaveOptions<T> {
  data: T;
  onSave: (data: T) => Promise<void>;
  delay?: number;
  enabled?: boolean;
}

/**
 * Hook for auto-saving data with debouncing
 */
export function useAutoSave<T>({
  data,
  onSave,
  delay = 1000,
  enabled = true,
}: UseAutoSaveOptions<T>) {
  const saveTimeoutRef = useRef<NodeJS.Timeout>();
  const previousDataRef = useRef<T>(data);
  const isSavingRef = useRef(false);

  // Debounced save function
  const debouncedSave = useCallback(
    debounce(async (dataToSave: T) => {
      if (isSavingRef.current) return;

      try {
        isSavingRef.current = true;
        await onSave(dataToSave);
        previousDataRef.current = dataToSave;
      } catch (error) {
        console.error('Auto-save failed:', error);
      } finally {
        isSavingRef.current = false;
      }
    }, delay),
    [onSave, delay]
  );

  // Auto-save on data changes
  useEffect(() => {
    if (!enabled) return;

    const dataChanged = JSON.stringify(data) !== JSON.stringify(previousDataRef.current);

    if (dataChanged) {
      debouncedSave(data);
    }

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [data, enabled, debouncedSave]);

  // Manual save function
  const saveNow = useCallback(async () => {
    if (isSavingRef.current) return;

    try {
      isSavingRef.current = true;
      await onSave(data);
      previousDataRef.current = data;
    } catch (error) {
      console.error('Manual save failed:', error);
      throw error;
    } finally {
      isSavingRef.current = false;
    }
  }, [data, onSave]);

  return { saveNow, isSaving: isSavingRef.current };
}
