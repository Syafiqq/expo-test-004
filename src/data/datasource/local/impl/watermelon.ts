import {Database} from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import {migrations, schema} from "@/data/datasource/local/impl/watermelon.d";
import {Env} from "@env";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: Env.APP_DATABASE_NAME,
  jsi: false,
  onSetUpError: error => {
    // TODO: Should notify the crashlytics
  }
})

const database = new Database({
  adapter,
  modelClasses: [
  ],
})

export default database;
