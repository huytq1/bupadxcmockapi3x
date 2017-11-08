export default [
    {
        request: {
            personId: 400400
        },
        response: {
            status: 400
        }
    },
    {
        request: {
            personId: 404404
        },
        response: {
            status: 404
        }
    },
    {
        request: {
            personId: 500500
        },
        response: {
            status: 500
        }
    },
    {
        request: {
            personId: 209041561
        },
        response: {
            data: [
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "11111111",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "22222222",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "33333333",
                    relationshipToPolicy: "Contributor",
                    hasExtras: false,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "44444444",
                    relationshipToPolicy: "Dependent",
                    hasExtras: false,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "55555555",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: false,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "LOC1",
                    membershipId: "66666666",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "LOC1",
                    membershipId: "77777777",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "5", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "88888888",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                }, {
                    status: "Ceased",
                    levelOfCover: "LOC1",
                    membershipId: "123",
                    relationshipToPolicy: "Dependent(s)",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "",
                    relationshipToPolicy: "Dependent(s)",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "1234567890",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "4", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "LOC1",
                    membershipId: "32323223",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "4", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "49494949",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "3", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "LOC1",
                    membershipId: "78787878",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "3", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "LOC1",
                    membershipId: "89898989",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "5", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "LOC1",
                    membershipId: "1212121",
                    relationshipToPolicy: "Dependent(s)",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "2", Description: "" }
                }
            ]
        }
    },
    //QC data
    {	// Test case 121058 UC0293C_AC03_ST001
        request: {
            personId: 247494397
        },
        response: {
            data: [
                {
                    status: "Active",
                    levelOfCover: "OSHC1",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "Home" },
                    package: { Value: "1", Description: "HospitalAncillary" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC2",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "2", Description: "HospitalOnly" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "3", Description: "AncillaryOnly" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC4",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "4", Description: "AmbulanceOnly" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC5",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "5", Description: "ReciprocalPolicies" }
                },
                {
                    status: "Active",
                    levelOfCover: "Home",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "Home" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Car",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "Car" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Travel",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "Travel" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Pet",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "Pet" },
                    package: { Value: "5", Description: "" }
                }
            ]
        }
    },
    {	// Test case 121059 UC0293C_AC03_ST002
        request: {
            personId: 247494399
        },
        response: {
            data: [
                {
                    status: "Ceased",
                    levelOfCover: "OSHC1",
                    membershipId: "24899015",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "1", Description: "HospitalAncillary" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC2",
                    membershipId: "24899015",
                    relationshipToPolicy: "Spouse",
                    hasExtras: false,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "2", Description: "HospitalOnly " }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "3", Description: "AncillaryOnly " }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC4",
                    membershipId: "24899015",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "4", Description: "AmbulanceOnly " }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC5",
                    membershipId: "24899015",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "Health" },
                    package: { Value: "5", Description: "ReciprocalPolicies " }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Home",
                    membershipId: "9684564",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "Home" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Car",
                    membershipId: "9684564",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "Car" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Travel",
                    membershipId: "9684564",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "Travel" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Pet",
                    membershipId: "9684564",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "Pet" },
                    package: { Value: "5", Description: "" }
                }
            ]
        }
    },
    {	// Test case 121060 UC0293C_AC03_ST003
        request: {
            personId: 247494398
        },
        response: {
            data: [
                {
                    status: "Suspended",
                    levelOfCover: "OSHC1",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC2",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC4",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "4", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC5",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Home",
                    membershipId: "9684564",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Car",
                    membershipId: "9684564",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Travel",
                    membershipId: "9684564",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Pet",
                    membershipId: "9684564",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "" },
                    package: { Value: "5", Description: "" }
                }
            ]
        }
    },
    {	// Test case 121061 UC0293C_AC03_ST004
        request: {
            personId: 247494396
        },
        response: {
            data: [
                {
                    status: "Active",
                    levelOfCover: "Active - Health",
                    membershipId: "5",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Active - Health",
                    membershipId: "24899016",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Active - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Active - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "4", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Active - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Active - Home",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Active - Car",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Active - Travel",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Active - Pet",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "4", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Home",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Car",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Travel",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Ceased - Pet",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Suspended - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Suspended - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                },
                {
                    status: "Suspended - Health",
                    levelOfCover: "OSHC33",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Suspended - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "4", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Suspended - Health",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Suspended - Home",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Suspended - Car",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Suspended - Travel",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Suspended - Pet",
                    membershipId: "9684564",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "" },
                    package: { Value: "5", Description: "" }
                }
            ]
        }
    },
    {	// Test case 121081 UC0293C_AC03_ST005
        request: {
            personId: 197298657
        },
        response: {
            data: [
                {
                    status: "Active",
                    levelOfCover: "OSHC1",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC2",
                    membershipId: "24899015",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Dependent",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC4",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parities",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                }
            ]
        }
    },
    {	// Test case 121084 UC0293C_AC03_ST006
        request: {
            personId: 197298658
        },
        response: {
            data: [
                {
                    status: "Active",
                    levelOfCover: "OSHC1",
                    membershipId: "24899015",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC2",
                    membershipId: "24899015",
                    relationshipToPolicy: "Spouse",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Dependent",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC4",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parities",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC4",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parities",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "4", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "OSHC4",
                    membershipId: "24899015",
                    relationshipToPolicy: "Interested Parities",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "5", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Dependent",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Dependent",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Dependent",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC3",
                    membershipId: "24899015",
                    relationshipToPolicy: "Dependent",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "3", Description: "" },
                    package: { Value: "1", Description: "" }
                }
            ]
        }
    },
    {	// Test case 121052 UC0293C_AC01_ST002
        request: {
            personId: 185050295
        },
        response: {
            data: [
                {
                    status: "Active",
                    levelOfCover: "Top Hospital Cover with Premier Extras and Pharmacy Saver",
                    membershipId: "247858",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Active",
                    levelOfCover: "Level Of Cover",
                    membershipId: "247858",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },

                },
                {
                    status: "Ceased",
                    levelOfCover: "Level Of Cover",
                    membershipId: "247858",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "" },

                },
                {
                    status: "Ceased",
                    levelOfCover: "Level Of Cover",
                    membershipId: "247858",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "" },

                },
                {
                    status: "Suspended",
                    levelOfCover: "Level Of Cover",
                    membershipId: "247858",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "" },

                }
            ]
        }
    },
    {	// Test Case 121060: UC0293C_AC03_ST003
        request: {
            personId: 185304155
        },
        response: {
            data: [
                {
                    status: "Ceased",
                    levelOfCover: "OSHC1",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC2",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC3",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC4",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "4", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC5",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Level Of Cover",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },

                },
                {
                    status: "Ceased",
                    levelOfCover: "Level Of Cover",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "" },

                },
                {
                    status: "Ceased",
                    levelOfCover: "Level Of Cover",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "" },

                },
                {
                    status: "Ceased",
                    levelOfCover: "Level Of Cover",
                    membershipId: "921309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "" },

                }
            ]
        }
    },
    {	// Test Case 121080: UC0293C_AC13_ST001
        request: {
            personId: 185264849
        },
        response: {
            data: [
                {
                    status: "Ceased",
                    levelOfCover: "OSHC1",
                    membershipId: "408195",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC2",
                    membershipId: "408195",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC3",
                    membershipId: "408195",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC4",
                    membershipId: "408195",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "4", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "OSHC5",
                    membershipId: "408195",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Ceased",
                    levelOfCover: "Level Of Cover",
                    membershipId: "21309604",
                    relationshipToPolicy: "Contributor",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },
                }
            ]
        }
    },
    {	// Test case 121076 UC0293C_AC09_ST002
        request: {
            personId: 35791246
        },
        response: {
            data: [
                {
                    status: "Suspended",
                    levelOfCover: "OSHC1",
                    membershipId: "10000001",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC2",
                    membershipId: "10000002",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "2", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC3",
                    membershipId: "10000003",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "3", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC4",
                    membershipId: "10000004",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "4", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "OSHC5",
                    membershipId: "10000005",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: true,
                    policyType: { Value: "1", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Level Of Cover",
                    membershipId: "9684564",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "2", Description: "" },
                    package: { Value: "1", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Level Of Cover",
                    membershipId: "9684564",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "3", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Level Of Cover",
                    membershipId: "9684564",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "4", Description: "" },
                    package: { Value: "5", Description: "" }
                },
                {
                    status: "Suspended",
                    levelOfCover: "Level Of Cover",
                    membershipId: "9684564",
                    relationshipToPolicy: "Interested Parties",
                    hasExtras: true,
                    hasMedicalHospital: false,
                    policyType: { Value: "5", Description: "" },
                    package: { Value: "5", Description: "" }
                }
            ]
        }
    }
];
