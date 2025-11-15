import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { Module2Data } from '@/types/module';

// GET: Load module progress
export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');
    const moduleId = parseInt(request.nextUrl.searchParams.get('moduleId') || '2');

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    const progress = await prisma.moduleProgress.findUnique({
      where: {
        userId_moduleId: {
          userId,
          moduleId,
        },
      },
    });

    if (!progress) {
      // Return empty module data structure
      const emptyData: Module2Data = {
        personas: [{
          id: 'default',
          name: 'Persona 1',
          demographics: {
            ageRange: '',
            gender: '',
            incomeLevel: '',
            education: '',
            occupation: '',
            location: {},
          },
          psychographics: {
            values: [],
            interests: [],
            lifestyle: '',
            motivations: [],
            mediaConsumption: [],
          },
          goalsAspirations: [],
          challengesPainPoints: [],
          decisionFactors: [],
          buyingBehavior: {
            researchMethods: [],
            decisionProcess: '',
            purchaseChannels: [],
          },
        }],
        lastUpdated: new Date().toISOString(),
        completionPercentage: 0,
      };

      return NextResponse.json({
        success: true,
        data: {
          id: null,
          userId,
          moduleId,
          data: emptyData,
          location: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: progress,
    });
  } catch (error) {
    console.error('Failed to load module progress:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to load module progress' },
      { status: 500 }
    );
  }
}

// POST: Save module progress
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, moduleId = 2, data, location } = body;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Update lastUpdated timestamp
    const updatedData = {
      ...data,
      lastUpdated: new Date().toISOString(),
    };

    const progress = await prisma.moduleProgress.upsert({
      where: {
        userId_moduleId: {
          userId,
          moduleId,
        },
      },
      update: {
        data: updatedData,
        location: location || undefined,
      },
      create: {
        userId,
        moduleId,
        data: updatedData,
        location: location || undefined,
      },
    });

    return NextResponse.json({
      success: true,
      data: progress,
    });
  } catch (error) {
    console.error('Failed to save module progress:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save module progress' },
      { status: 500 }
    );
  }
}
