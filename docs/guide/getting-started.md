# Getting Started

## Backend environment

:::warning Prerequisite
- Your machine environment is compatible for developing full stack Laravel.
- You have cloned the repository from `git@github.com:ebteq/salon-v3.git`.
:::

### Setting up .env

1. In your project directory, copy the .env.example to .env
```bash:no-line-numbers
cp .env.example .env
```
2. Edit .env for your local database setting
```txt:no-line-numbers title=".env"
...
DB_DATABASE=your-local-db-name
DB_USERNAME=your-local-db-username
DB_PASSWORD=your-local-db-password
...
```
3. Run migration
```bash:no-line-numbers
php artisan migrate
```

### Essential database data
1. Add your email to seeder `database/seeders/RapidTestingSeeder.php@setupEbteqAccounts`

```php{9}
protected function setupEbteqAccounts()
{
    foreach ([
        'khoo.jack@gmail.com',
        'barnabasoung@gmail.com',
        'aaz.abdulazizzulfikar@gmail.com',
        'mputra.aryandi@gmail.com',
        'ntk.0629@gmail.com',
        'yourname@mail.com',
    ] as $email) {
        $this->setupEbteqAccount($email);
    }
}
```
:::tip Explanation
This will add your email as an admin account to access to almost every permission for the ease of development and debugging in local and staging.
:::
2. Run seeder to setup basic data to kick start your development.
```bash:no-line-numbers
php artisan db:seed RapidTestingSeeder
```
3. Run seeder to have richer data in place for development.
```bash:no-line-numbers
php artisan db:seed RapidAdditionalDataSeeder
```

:::tip
This seeder is not essential, but and populate your local database with some data to mimic a more complete usage of the accounts
:::

## Front end
1. `npm install`
2. `npm run build` to generate static build of your front end files
3. `npm run dev` to run a development server for your front end files

## Ready to go
:::tip
1. You may start from: http://your-local.domain/ebteqsoftware/pos
2. Use the email you've just added to login to the account `yourname@mail.com`.
3. The password is `password`.
:::
