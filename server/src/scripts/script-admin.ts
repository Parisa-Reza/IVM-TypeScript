const seedAdmin = async () => {

    const argv = process.argv.slice(2);

    console.log ('pased arguments', argv);

    const adminEmail=argv[0] || 'admin@bongodev.com';
    const adminName=argv[1] || 'Admin';
    const adminPassword=argv[2] || 'admin123';
    console.log('seeding admin user...',{
        adminEmail,
        adminName,
        adminPassword
    })
}

if(require.main === module){
    seedAdmin().catch((error)=>{
        console.error("Error seeding admin user:", error);
        process.exit(1);
    });
}