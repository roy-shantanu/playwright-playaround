const env = process.env

const testConfig = {
    credentials: safeParseJson(env.TESTSECRET, 'TESTSECRET') as UserCreds[],
}

function safeParseJson(val: any, label: string): unknown {
    try {
        return JSON.parse(val || '[]')
    } catch (e) {
        console.error(`Error parsing value ==> ${label}`, e.message)
        return []
    }
}

interface UserCreds {
    email: string
    password: string
  }

export default testConfig