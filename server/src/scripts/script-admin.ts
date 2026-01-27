import { connectDB } from '@/config';
import { UserModel, userService } from '@/modules/user';

const seedAdmin = async () => {
  const argv = process.argv.slice(2);
  // here process.argv.slice(2) to skip the first two default arguments
  // process.argv = an array of all command-line arguments
  // First 2 items are always: Node path and Script file path
  // .slice(2) removes those two, so you only get the user arguments.

  console.log('pased arguments', argv);

  const adminEmail = argv[0] || 'admin@bongodev.com';
  const adminName = argv[1] || 'Admin';
  const adminPassword = argv[2] || 'admin123';
  console.log('seeding admin user...', {
    adminEmail,
    adminName,
  });

  const existingAdmin = await userService.findUserByEmail(adminEmail);
  if (existingAdmin) {
    console.log('Admin user already exists. Skipping seeding.');
    return;
  }

  await UserModel.create({
    name: adminName,
    email: adminEmail,
    passwordHash: await userService.getHashedPassword(adminPassword),
    role: 'admin',
    isDraft: false,
  });

  console.log('Admin user seeded successfully.');
};

const main = async () => {
  await connectDB();
  await seedAdmin();
};

if (require.main === module) {
  main()
    .catch((error) => {
      console.error('Error connecting to the database:', error);
      process.exit(1);
    })
    .finally(() => {
      process.exit(1);
    });
}
