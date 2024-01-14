interface MajorCredits {
    credits: number;
    brand: "major";
}

interface MinorCredits {
    credits: number;
    brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits{
    const major: MajorCredits = {
        credits: subject1.credits + subject2.credits,
        brand: "major"
    };
    return major;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    const minor: MinorCredits = {
        credits: subject1.credits + subject2.credits,
        brand: "minor"
    };
    return minor;
}