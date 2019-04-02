export interface careerResponse {
    applicants: {
        firstname: string,
        lastname: string,
        address: string,
        city: string,
        state: string,
        zipcode: number,
        phone_no: number,
        email: string,
        currentLocation: string,
        gender: string,
        currentEmpName: string,
        jobTitle: string,
        nightShift: string,
        totalExp: string,
        keySkills: string,
        references: string,
        vrd_ref_number: string
    },
    application: {
        message: string,
        response_type: string,
        response_action: string,
        stage: string
    }
}
