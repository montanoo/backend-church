import { prisma } from "../utils/prisma";

const getAllTransactions = async () => {
    return prisma.financialTransaction.findMany();
};

const getTransactionsById = async (id: number) => {
    return prisma.financialTransaction.findUnique({
      where: { id },
    });
};

const createTransaction  = async (data: {
    transactionType: string;
    amount: number;
    description: string;
    transactionDate: Date;
    category: string;
    reservationId: number;
  }) => {
    return prisma.financialTransaction.create({
      data,
    });
};

const updateTransaction = async (id: number, data: {
    transactionType: string;
    amount: number;
    description: string;
    transactionDate: Date;
    category: string;
    reservationId: number;
}) => {
  return prisma.financialTransaction.update({
    where: { id },
    data,
  });
};

const deleteTransaction = async (id: number) => {
    return prisma.financialTransaction.delete({
      where: { id },
    });
};

export default {    
    getAllTransactions,
    getTransactionsById,
    createTransaction,
    updateTransaction,
    deleteTransaction,
  };