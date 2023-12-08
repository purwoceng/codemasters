export class BankAccount{
    constructor(accountNumber,accountHolder,balance){
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
        console.log(`Nomor Akun ${this.accountNumber} `)
        console.log(`Pemilik Akun ${this.accountHolder} `)
        console.log(`Riwayat Tabungan Akun Rp.  ${this.balance} `)
    }

    jumlah_menabung(jumlah_uang) {
        this.balance += jumlah_uang;
        console.log(`Anda Menabung: ${jumlah_uang}`);
      }
      jumlah_penarikan(jumlah_uang) {
          this.balance -= jumlah_uang;
          console.log(`Penarikan anda: Rp.  ${jumlah_uang}`);
      
      }
      total_tabungan() {
        console.log(`Total Tabungan : Rp.  ${this.balance}`);
      }
}

export class Bank{
  accounts = []

  constructor(name) {
    this.name = name
  }

  addAccount(account) {
    this.accounts.push(account)
  }

  getAccount(number) {
    return this.accounts.find((account) => account.number === number)
  }

  deleteAccount(number) {
    this.accounts = this.accounts.filter((account) => account.number !== number)
  }

  listAccounts() {
    return this.accounts
  }
}