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
