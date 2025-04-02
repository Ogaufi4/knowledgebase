const timeConverter = (milliseconds: number | null | undefined) => {
    if(
        milliseconds === null ||
        milliseconds === undefined ||
        typeof milliseconds !== "number" 
        // || milliseconds < 0
    ) {
        return null;
    }
    const hours = `0${Math.floor(milliseconds / 3600000)}`.slice(-2);
    const minutes = `0${Math.floor((milliseconds % 3600000) / 60000)}`.slice(-2);
    const seconds = `0${Math.floor((milliseconds % 60000) / 1000)}`.slice(-2);

    return {
        hours,
        minutes,
        seconds,
    };
};

export default timeConverter;