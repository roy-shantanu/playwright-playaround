import {test as base} from '@playwright/test';
import * as fs from 'fs';


export interface UserCreds {
    index: string
    email: string
}

interface FixtureTypes {
    unregisteredFbUsers: UserCreds
}

export const test = base.extend<FixtureTypes>({

    unregisteredFbUsers: async ({page}, use, testInfo) => {
        const jsonData = fs.readFileSync('tests/unregisteredFbUsers.json', 'utf8')
        const userData: UserCreds[] = JSON.parse(jsonData);
        // console.log(userData)
        const shard_index = testInfo.config.shard?.current ?? 1
        const parallelIndex = testInfo.parallelIndex
        const maxNumberOfWorkersPerShard = testInfo.config.workers
        const user_index = (shard_index - 1) * maxNumberOfWorkersPerShard + parallelIndex
        // console.log(user_index)
        await use(userData[user_index])
    },

});
