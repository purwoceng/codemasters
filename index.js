// // const myModule = require('./myModule.js')
// // console.log(myModule.greet('John'))


// const fs = require('fs')

// //membaca berkas
// // fs.readFile('data.txt','utf8',(err, data)=>{
// //     if(err) throw err
// //     console.log(data);
// // })

// //menulis berkas
// // fs.writeFile('output.txt','Teks yang akan ditulis.',(err)=>{
// //     if(err) throw err
// //     console.log('Berkas telah ditulis.');
// // })

// //list berkas dan direktori
// fs.readdir('.', (err, files) => {
//     if (err) throw err
//     console.log(files)
// })

// const readline = require('readline')

// const rl = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout,
// })

// rl.question('siapa nama anda? ', (nama)=>{
//     console.log(`Halo, ${nama}! Selamat datang.`)
//     rl.close()
// })

// const readline = require('readline')
// const rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout,
// })
// function showMenu() {
// console.log('Pilih menu:')
// console.log('1. Lihat profil')
// console.log('2. Ubah kata sandi')
// console.log('3. Keluar')
// }
// showMenu()
// rl.question('Pilihan Anda: ', (pilihan) => {
// if (pilihan === '1') {
// console.log('Profil pengguna...')
// } else if (pilihan === '2') {
// console.log('Ubah kata sandi...')
// } else if (pilihan === '3') {
// console.log('Anda telah keluar.')
// } else {
// console.log('Pilihan tidak valid.')
// }
// rl.close()
// })

//mengakses argumen baris perintah
// const args = process.argv
// // console.log('Argumen baris perintah')
// // console.log(args)


// const greet = ()=>{
//     const args = process.argv
//     if(args.length>2){
//         console.log(`Hello, ${args[2]}`)
//     }else{
//         console.log(`Hello, Node JS`)
//     }
// }
// greet()
// //menghentikan process
// process.exit(0);

//module my math
// const myMath = require('./myMath.js')
// console.log(myMath.addNumbers(5,3))
// console.log(myMath.subtractNumbers(10, 4))

//module my formatter
// const formatter = require('./formatter.js')
// console.log(formatter.moneyFormat(1000.5))
// console.log(formatter.dateFormat(new Date()))

//module formatteres6
// import * as formatter6 from './formatter6.js'
// console.log(formatter6.moneyFormat(1000.5))
// console.log(formatter6.dateFormat(new Date()))

// import { format, addDays } from 'date-fns'

// const today = new Date()
// const tomorrow = addDays(today,1)

// const formattedToday = format (today, 'dd/MM/yyyy')
// const formattedTomorrow = format(tomorrow, 'dd/MM/yyyy')

// console.log(`Hari ini : ${formattedToday}`)
// console.log(`Besok : ${formattedTomorrow}`)

// const fs = require('fs')

// //membaca berkas
// fs.readFile('books.json','utf8',(err, data)=>{
//     if(err) throw err
//     console.log(data);
// })

import { readFile } from 'fs'
import Table from 'cli-table3'


readFile('books.json', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data);

    const jsonData = JSON.parse(data)

    // Create a CLI table
    const table = new Table({
      head: ['Judul', 'Pengarang', 'Tahun Publikasi', 'Tema'],
    })

    // Populate the table with book data
    jsonData.forEach(book => {
      table.push([
        book.title,
        book.author,
        book.publication_year,
        book.genres.join(', '),
      ])
    })

    // Display the table
    console.log(table.toString())
  } 
)


export class BankAccount{
  constructor(accountNumber,accountHolder,balance){
      this.accountNumber = accountNumber
      this.accountHolder = accountHolder
      this.balance = balance
      // console.log(`Nomor Akun ${this.accountNumber} `)
      // console.log(`Pemilik Akun ${this.accountHolder} `)
      // console.log(`Riwayat Akun ${this.balance} `)
  }

  deposit(amount) {
      this.balance += amount;
      console.log(`Anda Menabung: ${amount}`);
    }
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Penarikan anda: ${amount}`);
      } 
      else 
      {
        console.log(`Want to withdrawn: ${amount}`);
        console.log('Insufficient balance');
      }
    }
    displayBalance() {
      console.log(`Account Balance: ${this.balance}`);
    }
}

// const account = new BankAccount('SB-123', 'Purwo',1500);
// // Deposit money into the account
// account.deposit(500);
// // Withdraw money from the account
// account.withdraw(400);
// // Display the account balance
// account.displayBalance();
// // Withdraw money from the account
// account.withdraw(2000);
// // Display the account balance
// account.displayBalance();

export class Bank extends BankAccount{
  constructor() {
      this.accounts = {};
  }
}