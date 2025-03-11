const createURL = (path: string) => window.location.origin + path
type OnboardingInput = {
    researchPurpose?: string
    organization?: string
    interests?: string[]
    termsAccepted?: boolean
}

export const createNewOnboarding = async (data?: OnboardingInput) => {
    console.log('>>>>>>>>>>>>Entry: API>>>>>>>>>>>>>>>>>>')
    console.log('>>>>>>>>>>>>>>ENTRY DATA:>>>>>>>>>>', data)
    const res = await fetch(
        new Request(createURL('/api/onboarding'), {
            method: 'POST',
            body: JSON.stringify(data),
        })
    )

    if (res.ok) {
        const data = await res.json()
        return data.data
    } else {
        throw new Error('Something went wrong on API server!')
    }
}
