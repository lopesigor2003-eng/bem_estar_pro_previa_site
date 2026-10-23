/**
 * Pure utility functions for Bem Estar Pro fitness metrics and schedule verification.
 */

export interface BmiResult {
  bmi: number;
  category: 'Abaixo do peso' | 'Peso ideal' | 'Sobrepeso' | 'Obesidade';
  recommendation: string;
}

export interface FitnessTargets {
  dailyProteinGrams: number;
  recommendedWeeklyWorkouts: number;
  suggestedFocus: string;
}

export type WorkoutGoal = 'hipertrofia' | 'fisiculturismo' | 'emagrecimento' | 'condicionamento';

export interface GymStatus {
  isOpen: boolean;
  statusText: string;
  scheduleDetails: string;
}

/**
 * Calculates Body Mass Index and provides sports recommendation.
 */
export function calculateBmi(weightKg: number, heightCm: number): BmiResult {
  if (weightKg <= 0 || heightCm <= 0) {
    throw new Error('Peso e altura devem ser valores positivos.');
  }

  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));

  if (bmi < 18.5) {
    return {
      bmi,
      category: 'Abaixo do peso',
      recommendation: 'Foco em hipertrofia, superávit calórico limpo e fortalecimento muscular.',
    };
  }

  if (bmi < 25) {
    return {
      bmi,
      category: 'Peso ideal',
      recommendation: 'Excelente base corporal! Ideal para periodização de hipertrofia ou definição muscular estética.',
    };
  }

  if (bmi < 30) {
    return {
      bmi,
      category: 'Sobrepeso',
      recommendation: 'Recomenda-se treino de força conjugado com treinamento metabólico e acompanhamento nutricional.',
    };
  }

  return {
    bmi,
    category: 'Obesidade',
    recommendation: 'Priorize fortalecimento articular guiado por nossos fisioterapeutas e personal trainers especializados.',
  };
}

/**
 * Calculates daily recommended protein and training schedule based on fitness goal.
 */
export function calculateFitnessTargets(goal: WorkoutGoal, weightKg: number): FitnessTargets {
  if (weightKg <= 0) {
    throw new Error('Peso deve ser maior que zero.');
  }

  switch (goal) {
    case 'fisiculturismo':
      return {
        dailyProteinGrams: Math.round(weightKg * 2.2),
        recommendedWeeklyWorkouts: 6,
        suggestedFocus: 'Periodização avançada, simetria muscular e treino isolado com biomecânica de precisão.',
      };
    case 'hipertrofia':
      return {
        dailyProteinGrams: Math.round(weightKg * 1.8),
        recommendedWeeklyWorkouts: 5,
        suggestedFocus: 'Sobrecarga progressiva, exercícios compostos e descanso adequado.',
      };
    case 'emagrecimento':
      return {
        dailyProteinGrams: Math.round(weightKg * 1.6),
        recommendedWeeklyWorkouts: 4,
        suggestedFocus: 'Musculação intensa associada a déficit calórico controlado e trabalho cardiovascular.',
      };
    case 'condicionamento':
    default:
      return {
        dailyProteinGrams: Math.round(weightKg * 1.4),
        recommendedWeeklyWorkouts: 3,
        suggestedFocus: 'Resistência muscular, mobilidade funcional e qualidade de vida integral.',
      };
  }
}

/**
 * Checks if the gym is currently open based on official Bem Estar Pro operating hours:
 * - Segunda a Sexta: 07:00–22:00
 * - Sábado: 09:00–12:00 e 15:00–18:00
 * - Domingo: Fechado
 */
export function checkGymOpenStatus(date: Date = new Date()): GymStatus {
  const day = date.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  // Domingo
  if (day === 0) {
    return {
      isOpen: false,
      statusText: 'Fechado hoje (Abre segunda às 07:00)',
      scheduleDetails: 'Domingo: Fechado. Segunda reabrimos às 07:00.',
    };
  }

  // Sábado
  if (day === 6) {
    const morningStart = 9 * 60; // 09:00
    const morningEnd = 12 * 60; // 12:00
    const afternoonStart = 15 * 60; // 15:00
    const afternoonEnd = 18 * 60; // 18:00

    if (currentMinutes >= morningStart && currentMinutes < morningEnd) {
      return {
        isOpen: true,
        statusText: 'Aberto agora (Turno manhã até 12:00)',
        scheduleDetails: 'Sábado: 09:00–12:00 e 15:00–18:00',
      };
    }
    if (currentMinutes >= afternoonStart && currentMinutes < afternoonEnd) {
      return {
        isOpen: true,
        statusText: 'Aberto agora (Turno tarde até 18:00)',
        scheduleDetails: 'Sábado: 09:00–12:00 e 15:00–18:00',
      };
    }
    if (currentMinutes < morningStart) {
      return {
        isOpen: false,
        statusText: 'Fechado (Abre hoje às 09:00)',
        scheduleDetails: 'Sábado: 09:00–12:00 e 15:00–18:00',
      };
    }
    if (currentMinutes >= morningEnd && currentMinutes < afternoonStart) {
      return {
        isOpen: false,
        statusText: 'Fechado para almoço (Reabre hoje às 15:00)',
        scheduleDetails: 'Sábado: 09:00–12:00 e 15:00–18:00',
      };
    }
    return {
      isOpen: false,
      statusText: 'Fechado (Reabre segunda às 07:00)',
      scheduleDetails: 'Sábado: 09:00–12:00 e 15:00–18:00',
    };
  }

  // Segunda a Sexta (1 a 5)
  const weekdayStart = 7 * 60; // 07:00
  const weekdayEnd = 22 * 60; // 22:00

  if (currentMinutes >= weekdayStart && currentMinutes < weekdayEnd) {
    return {
      isOpen: true,
      statusText: 'Aberto agora (Até às 22:00)',
      scheduleDetails: 'Segunda a Sexta: 07:00–22:00 sem interrupção',
    };
  }

  if (currentMinutes < weekdayStart) {
    return {
      isOpen: false,
      statusText: 'Fechado (Abre hoje às 07:00)',
      scheduleDetails: 'Segunda a Sexta: 07:00–22:00',
    };
  }

  return {
    isOpen: false,
    statusText: 'Fechado (Reabre amanhã às 07:00)',
    scheduleDetails: 'Segunda a Sexta: 07:00–22:00',
  };
}

/**
 * Builds direct WhatsApp URL with custom message
 */
export function formatWhatsAppUrl(rawPhone: string, message: string = ''): string {
  let digits = rawPhone.replace(/\D/g, '');
  if (digits.startsWith('0')) {
    digits = digits.replace(/^0+/, '');
  }
  // Brazilian phone: 10 digits (2 DDD + 8 number) or 11 digits (2 DDD + 9 mobile)
  // If not already including country code (+55 prefix with 12 or 13 digits):
  let cleanPhone = digits;
  if (digits.length === 10 || digits.length === 11) {
    cleanPhone = `55${digits}`;
  } else if (!cleanPhone.startsWith('55')) {
    cleanPhone = `55${cleanPhone}`;
  }
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}${encodedMsg ? `?text=${encodedMsg}` : ''}`;
}
