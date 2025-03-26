import { Request, Response } from "express";
import financialService from "../services/financial.service";

const createTransaction = async (req: Request, res: Response): Promise<Response> => {
  try {
    const transaction = await financialService.createTransaction(req.body);
    return res.status(201).json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    return res.status(400).json({ message: "Failed to create transaction", error });
  }
};

const getAllTransactions = async (req: Request, res: Response): Promise<Response> => {
  try {
    const transactions = await financialService.getAllTransactions();
    return res.status(200).json(transactions);
  } catch (error) {
    console.error("Error retrieving transactions:", error);
    return res.status(500).json({ message: "Failed to retrieve transactions", error });
  }
};

const getTransactionsById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const transaction = await financialService.getTransactionsById(parseInt(id));

    if (!transaction) {
      return res.status(404).json({ message: "Marriage record not found" });
    }

    return res.status(200).json(transaction);
  } catch (error) {
    console.error("Error retrieving transaction:", error);
    return res.status(500).json({ message: "Failed to retrieve transaction", error });
  }
};

const updateTransaction = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedTransaction = await financialService.updateTransaction(parseInt(id), req.body);

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Marriage record not found" });
    }

    return res.status(200).json(updatedTransaction);
  } catch (error) {
    console.error("Error updating transaction:", error);
    return res.status(500).json({ message: "Failed to update transaction", error });
  }
};

const deleteTransaction = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const deleted = await financialService.deleteTransaction(parseInt(id));

    if (!deleted) {
      return res.status(404).json({ message: "Marriage record not found" });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return res.status(500).json({ message: "Failed to delete transaction", error });
  }
};

export default {
  createTransaction,
  getAllTransactions,
  getTransactionsById,
  updateTransaction,
  deleteTransaction,
};