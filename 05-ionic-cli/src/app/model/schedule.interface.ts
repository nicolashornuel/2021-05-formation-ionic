export interface Schedule {
    date: Date;
    dateReadable: string;
    timeslots: [
        {
            startTime: string,
            endTime: string,
            sessions: [[number]]
        }
    ];
    tracks: [{ title: string }]
}