type Benefit = {
  id: number;
  description: string;
};

type PaymentMethod = {
  id: number;
  description: string;
};

export type SubscriptionDto = {
  id: number;
  idLevel: number;
  title: string;
  description: string;
  amount: string;
  numInstallments: number;
  discountPercentage: number;
  benefits: Benefit[];
  paymentMethods: PaymentMethod[];
};

// Ejemplo de función para convertir la respuesta del servicio
export function transformSubscriptionData(data: any): SubscriptionDto {
  return {
    id: data.id,
    idLevel: data.idLevel,
    title: data.title,
    description: data.description,
    amount: data.amount,
    numInstallments: data.numInstallments,
    discountPercentage: data.discountPercentage,
    benefits: data.benefits.map((benefit: any) => ({
      id: benefit.benefit.id,
      description: benefit.benefit.description,
    })),
    paymentMethods: data.paymentMethods.map((paymentMethod: any) => ({
      id: paymentMethod.paymentMethod.id,
      description: paymentMethod.paymentMethod.description,
    })),
  };
}

type levelDto = {
  id: number;
  title: string;
  description: string;
  order: number;
};

type TypeLevelDto = {
  id: number;
  title: string;
  description: string;
  levels: levelDto[];
};

export function transformLevelData(originalData: any) {
  const transformedData: TypeLevelDto[] = originalData.map(
    (typeLevel: any) => ({
      id: typeLevel.id,
      title: typeLevel.title,
      description: typeLevel.description,
      levels: typeLevel.typeLevelLevels.map((tll: any) => ({
        id: tll.level.id,
        title: tll.level.title,
        description: tll.level.description,
        order: tll.level.order,
      })),
    })
  );

  return transformedData;
}
