import bcrypt from "bcryptjs";
import { pool } from "../config/db";

async function seed() {
  const passwordHash = await bcrypt.hash("Admin@123", 10);

  await pool.query(
    "INSERT INTO users (email, password_hash, role) VALUES ($1, $2, 'admin') ON CONFLICT (email) DO NOTHING",
    ["admin@welityou.com", passwordHash]
  );

  await pool.query(
    `INSERT INTO services (title, slug, description, starting_price)
     VALUES
     ('Full Wedding Planning','full-wedding-planning','A complete concierge planning model.','INR 8,00,000'),
     ('Destination Weddings','destination-weddings','Luxury destination curation and execution.','INR 12,00,000')
     ON CONFLICT (slug) DO NOTHING`
  );

  await pool.query(
    `INSERT INTO packages (name, price, highlights)
     VALUES
     ('Silver Package','INR 6,99,000',ARRAY['Planning essentials','Core decor']),
     ('Gold Package','INR 11,99,000',ARRAY['Premium decor','Venue curation'])
     ON CONFLICT (name) DO NOTHING`
  );

  console.log("Seed complete");
  await pool.end();
}

seed().catch(async (error) => {
  console.error(error);
  await pool.end();
  process.exit(1);
});
