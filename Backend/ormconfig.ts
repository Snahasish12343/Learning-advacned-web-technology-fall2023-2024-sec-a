import { Ecredit } from "src/entities/ecredit";
import { Salaryentity } from "src/entities/salary.entity";
import { Suborg } from "src/entities/suborganization";
import { Subsupadmin } from "src/entities/subsupadmin";
import { Test_table } from "src/entities/test_table";
import { Trackmanager } from "src/entities/trackmanager";
import { Trackorg } from "src/entities/trackorg";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "hr_management",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: '123',
    entities: [Test_table, Trackorg, Salaryentity, Ecredit, Subsupadmin, Suborg, Trackmanager],
    synchronize: true
}

export default config;