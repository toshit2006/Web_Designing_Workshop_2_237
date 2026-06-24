abstract class BankAccount {
    private String accountNumber;
    private String accountHolderName;
    private double balance;

    public BankAccount(String accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public void setAccountHolderName(String accountHolderName) {
        this.accountHolderName = accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public abstract double calculateInterest();

    public void displayAccountDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolderName);
        System.out.println("Balance: Rs. " + balance);
        System.out.println("Interest: Rs. " + calculateInterest());
        System.out.println();
    }
}

class SavingsAccount extends BankAccount {
    public SavingsAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public double calculateInterest() {
        return getBalance() * 0.04;
    }
}

class CurrentAccount extends BankAccount {
    public CurrentAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public double calculateInterest() {
        return getBalance() * 0.02;
    }
}

public class BankManagementSystem {
    public static void main(String[] args) {
        SavingsAccount savings = new SavingsAccount("SAV101", "Rahul Sharma", 25000);
        CurrentAccount current = new CurrentAccount("CUR201", "Priya Verma", 50000);

        savings.deposit(5000);
        current.deposit(10000);

        System.out.println("Bank Management System");
        System.out.println("----------------------");
        savings.displayAccountDetails();
        current.displayAccountDetails();
    }
}
