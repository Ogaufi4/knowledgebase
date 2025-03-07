This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


C:\Program Files\PostgreSQL\17\data

setx /M path "%PATH%;C:\Program Files\PostgreSQL\15\bin"

### FOLDER STRUCTURE
https://www.youtube.com/watch?v=UpClc2Hhr8k
https://www.youtube.com/watch?v=xyxrB2Aa7KE


### Neon
https://neon.tech/docs/guides/nextjs
https://neon.tech/postgresql/postgresql-getting-started
https://www.youtube.com/watch?v=llSTZMVrbx8
https://neon.tech/docs/get-started-with-neon/query-with-neon-sql-editor
https://neon.tech/docs/get-started-with-neon/query-with-neon-sql-editor#meta-commands
https://neon.tech/postgresql/postgresql-tutorial/postgresql-select
https://neon.tech/docs/connect/query-with-psql-editor


### Connection methods
---Neon set up
npm install -g neonctl
neon auth
C:\Users\samue\.config\neonctl\credentials.json

neon branches create --name dev/ken

--connect on the dev branch
neon connection-string dev/developer_name --database-name neondb --psql
neon postgresql://kitsodb_owner:npg_nD4MVcjSEK6O@ep-ancient-hall-a5e2qqnz.us-east-2.aws.neon.tech/kitsodb?sslmode=require dev/ken --database-name kitsodb --psql
psql 'postgresql://kitsodb_owner:npg_nD4MVcjSEK6O@ep-ancient-hall-a5e2qqnz-pooler.us-east-2.aws.neon.tech/kitsodb?sslmode=require'


-- PostgreSQL
https://github.com/neondatabase-labs/postgres-sample-dbs
https://neon.tech/postgresql/postgresql-getting-started
https://neon.tech/postgresql/postgresql-tutorial/postgresql-select


psql 'postgresql://kitsodb_owner:npg_nD4MVcjSEK6O@ep-ancient-hall-a5e2qqnz-pooler.us-east-2.aws.neon.tech/kitsodb?sslmode=require'
- de/ken
psql postgresql://kitsodb_owner:npg_nD4MVcjSEK6O@ep-ancient-hall-a5e2qqnz-pooler.us-east-2.aws.neon.tech/kitsodb?sslmode=require

postgresql://kitsodb_owner:npg_nD4MVcjSEK6O@ep-super-frost-a55yz2el-pooler.us-east-2.aws.neon.tech/kitsodb?sslmode=require

## Prisma

--schem.prisma.ts
// prisma/schema.prisma
datasource db {
  provider  = "postgresql"
  url  	    = env("DATABASE_URL")
  // uncomment next line if you use Prisma <5.10
  // directUrl = env("DATABASE_URL_UNPOOLED")
}
--.env
// prisma/schema.prisma
datasource db {
  provider  = "postgresql"
  url  	    = env("DATABASE_URL")
  // uncomment next line if you use Prisma <5.10
  // directUrl = env("DATABASE_URL_UNPOOLED")
}

### Prisma ORM

1. Install Prisma Client: `npm i @prisma/client`
2. Install Prisma as dev dependency: `npm i prisma --save-dev`
3. Initialize Prisma: `npx prisma init`

https://pris.ly/cli/beyond-orm
https://pris.ly/d/getting-started

https://neon.tech/docs/guides/prisma#connect-to-neon-from-prisma
https://neon.tech/docs/guides/prisma-migrations#setting-up-the-node-application


npx prisma generate
npm install ws @prisma/adapter-neon @neondatabase/serverless
npm install -D @types/ws
npm i -D bufferutil

npm install @prisma/client && npm install prisma --save-dev
npx prisma init
npx prisma migrate dev --name init

npx prisma format
npx prisma db push


** increase the timeout
npx prisma db push --preview-feature

https://www.youtube.com/watch?v=Fceni6cdYOk
https://www.youtube.com/watch?v=4QN1BzxF8wM
https://www.youtube.com/watch?v=iqrgggs0Qk0
https://www.youtube.com/watch?v=jqhHXe746Ns
https://www.youtube.com/watch?v=Xk43fwSQ8No
https://www.youtube.com/watch?v=QXxy8Uv1LnQ

## NeonDrive
--
https://neon.tech/docs/get-started-with-neon/connect-neon
https://neon.tech/docs/guides/prisma#connect-to-neon-from-prisma

import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://kitsodb_owner:npg_nD4MVcjSEK6O@ep-super-frost-a55yz2el-pooler.us-east-2.aws.neon.tech/kitsodb?sslmode=require');

const posts = await sql('SELECT * FROM posts');

// See https://neon.tech/docs/serverless/serverless-driver
// for more information

--websocket
import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://kitsodb_owner:npg_nD4MVcjSEK6O@ep-super-frost-a55yz2el-pooler.us-east-2.aws.neon.tech/kitsodb?sslmode=require');

const posts = await sql('SELECT * FROM posts');

// See https://neon.tech/docs/serverless/serverless-driver
// for more information

### Next JS
// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    const sql = neon(process.env.DATABASE_URL);
    const data = await sql`...`;
    return data;
}

--.env
# Do not expose your Neon credentials to the browser

DATABASE_URL='postgresql://kitsodb_owner:****************@ep-super-frost-a55yz2el-pooler.us-east-2.aws.neon.tech/kitsodb?sslmode=require'

### Django
# Add these at the top of your settings.py
import os
from dotenv import load_dotenv
from urllib.parse import urlparse

load_dotenv()

# Replace the DATABASES section of your settings.py with this
tmpPostgres = urlparse(os.getenv("DATABASE_URL"))

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': tmpPostgres.path.replace('/', ''),
        'USER': tmpPostgres.username,
        'PASSWORD': tmpPostgres.password,
        'HOST': tmpPostgres.hostname,
        'PORT': 5432,
    }
}

DATABASE_URL='postgresql://kitsodb_owner:****************@ep-super-frost-a55yz2el-pooler.us-east-2.aws.neon.tech/kitsodb?sslmode=require'

### CLERK
https://www.youtube.com/watch?v=wVQHzOeNLzw

### REACT ROUTE
https://www.youtube.com/watch?v=NVuxUktUvxc
https://www.wisp.blog/blog/nextjs-15-api-get-and-post-request-examples
https://nextjs.org/blog/next-15-rc2
https://nextjs.org/blog/next-15
https://flaviocopes.com/nextjs-fix-already-10-prisma-clients/

import { getUserByClerkID } from '@/app/utils/auth/auth'
import prisma from '@/lib/prisma'
import { createOnboarding } from '@/lib/services/onboarding.service'
import { useClerk } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { clerkClient } from "@clerk/nextjs/server";



export const POST = async (req:Request) => {
    console.log('>>>>>>>>>>> API/Onboarding >>>>>>>>>>>>>>>>>>>')
    // console.log('>>>>>>>>>>> Request >>>>>>>>>>>>>>>>>>>', req)
    const user_clerk = await currentUser()
    // console.log('>>>>>>>>>>> Clerk >>>>>>>>>>>>>>>>>>>', user_clerk)

    // const { userId } = await clerkClient.users.getUser(req);

    // console.log('>>>>>>>>>>> USER/CLERK >>>>>>>>>>>>>>>>>>>', JSON.stringify(user_clerk))
    // const user = await getUserByClerkID()
    // console.log('>>>>>>>>>>>User Data>>>>>>>>>>>>>>>>>>>', user)
    // const data = await req.json()
    // const req_data = await req.json()

    console.log('>>>>>>>>>>>>>Request Data>>>>>>>>>>>>>>', req)
    // const entry =  await prisma.useronboardings.create({
    //               data: {
    //                 researchPurpose:data.researchPurpose,
    //                 organization:data.organization,
    //                 interests:data.interests,
    //                 termsAccepted:data.termsAccepted,
    //                 user: { connect: { id: user_clerk.id } },
    //               },
    //             });

    // Pass the user
    // const entry = await createOnboarding(data)

    return NextResponse.json({ data: user_clerk.id })
}



import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);

    console.log('>>>>>>>>>>> API/Onboarding >>>>>>>>>>>>>>>>>>>')
    const user_clerk = await currentUser()
    if (!user_clerk) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

    try {
        // const data = await req.json()

            await prisma.onboardings.create({
            data: {
                researchPurpose: "data.researchPurpose",
                organization: "data.organization",
                interests: "data.interests",
                termsAccepted: true,
                user: { connect: { id: user_clerk.id } },
            },
        })
        // return Response.json({ data });
        return NextResponse.json({ data: req })
    } catch (error) {
        console.error(error);
        return NextResponse.json(
          { error: error instanceof Error ? error.message : "Unknown error" },
          { status: 500 }
        );
    }


}
