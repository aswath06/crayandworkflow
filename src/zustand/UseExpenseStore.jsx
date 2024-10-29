import { create } from 'zustand';

const useExpenseStore = create((set) => ({
  expenses: [],
  addExpense: (expense) => set((state) => ({ expenses: [...state.expenses, expense] })),
}));

export default useExpenseStore;
