'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('P_C_salesInvoices', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      }, { transaction });
      await queryInterface.addColumn('P_C_Receipts', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      }, { transaction });
      await queryInterface.addColumn('P_C_purchaseCashes', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      }, { transaction });
      await queryInterface.addColumn('P_C_Payments', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      }, { transaction });
      await queryInterface.addColumn('P_C_CreditNotes', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      }, { transaction });
      await queryInterface.addColumn('P_C_DebitNotes', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      }, { transaction });
      await queryInterface.addColumn('P_C_Ledgers', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      }, { transaction });
       await queryInterface.addColumn('P_AccountDetails', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      }, { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('P_C_salesInvoices', 'deletedAt', { transaction });
      await queryInterface.removeColumn('P_C_Receipts', 'deletedAt', { transaction });
      await queryInterface.removeColumn('P_C_purchaseCashes', 'deletedAt', { transaction });
      await queryInterface.removeColumn('P_C_Payments', 'deletedAt', { transaction });
      await queryInterface.removeColumn('P_C_CreditNotes', 'deletedAt', { transaction });
      await queryInterface.removeColumn('P_C_DebitNotes', 'deletedAt', { transaction });
      await queryInterface.removeColumn('P_C_Ledgers', 'deletedAt', { transaction });
      await queryInterface.removeColumn('P_AccountDetails', 'deletedAt', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};