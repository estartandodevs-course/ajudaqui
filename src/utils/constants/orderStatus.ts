export const orderStatusId = {
  WAITING: 1,
  WAITING_VOLUNTARY: 2,
  IN_PROGRESS: 3,
  CONCLUDED: 4,
  CANCELED: 5,
};

export const orderStatusName = {
  1: 'aguardando',
  2: 'aguardando voluntario(a)',
  3: 'sendo atendido',
  4: 'concluida',
  5: 'cancelado',
};

interface IElderlyProfileData {
  name: string
}

export const mappedVoluntaryCardInfoByStatus = (
  orderStatus: number,
  elderlyProfileData: IElderlyProfileData,
) => {
  const TEXTS = {
    [orderStatusId.WAITING]: {
      title: 'Pedido liberado!',
      subTitle: 'Encaminhe-se ao encontro do idoso.',
    },
    [orderStatusId.WAITING_VOLUNTARY]: {
      title: 'Pedido resgatado!',
      subTitle: `${elderlyProfileData?.name}/ está te aguardando.`,
    },
    [orderStatusId.IN_PROGRESS]: {
      title: 'Pedido resgatado!',
      subTitle: `${elderlyProfileData?.name}/ chegou ao local.`,
    },
    [orderStatusId.CONCLUDED]: {
      title: 'Pedido Concluído!',
      subTitle: '😀',
    },
    [orderStatusId.CANCELED]: {
      title: 'Pedido cancelado!',
      subTitle: `${elderlyProfileData?.name}/ cancelou o pedido.`,
    },
  };

  return TEXTS[orderStatus];
};

interface IVoluntaryProfileData extends IElderlyProfileData {}

export const mappedElderlyCardInfoByStatus = (
  orderStatus: number,
  voluntaryProfileData: IVoluntaryProfileData,
) => {
  const TEXTS = {
    [orderStatusId.WAITING]: {
      title: 'Pedido enviado!',
      subTitle: 'Em breve você será atendido(a).',
    },
    [orderStatusId.WAITING_VOLUNTARY]: {
      title: 'Pedido recebido!',
      subTitle: `${voluntaryProfileData?.name}/ está a caminho.`,
    },
    [orderStatusId.IN_PROGRESS]: {
      title: 'Pedido recebido!',
      subTitle: `${voluntaryProfileData?.name}/ chegou ao local.`,
    },
    [orderStatusId.CONCLUDED]: {
      title: 'Pedido Concluído!',
      subTitle: '😀',
    },
    [orderStatusId.CANCELED]: {
      title: 'Pedido cancelado!',
      subTitle: 'Você cancelou o pedido.',
    },
  };

  return TEXTS[orderStatus];
};
