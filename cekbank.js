import { Bank,BankAccount } from './bank.js'

const account = new BankAccount('1233qqq', 'Purwo',1500);
// account. jumlah_menabung(500);
account.jumlah_penarikan(1449);
account.total_tabungan();

const akun = new Bank();
akun.addAccount('Purwo');


