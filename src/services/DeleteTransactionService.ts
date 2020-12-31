import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const findTransaction = await transactionRepository.findOne({
      where: {
        id,
      },
    });
    if (!findTransaction) {
      throw new AppError('Can not find transaction Id');
    }
    await transactionRepository.remove(findTransaction);
  }
}

export default DeleteTransactionService;
