import ThriveStackSDK from "@thrivestack/javascript-sdk";

const environmentKeys = {
    "product_id": "K1Qhjt5Ia",
    "environment_id": "mzNCeIeua"
}

const getThriveStackManagementToken = async () => {
    const response = await fetch('https://api.dev.app.thrivestack.ai/v1/GetTSDefaultManagementToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(environmentKeys)
    });
    const data = await response.json();
    return data?.api_trigger_token;
}

export const sdk = ThriveStackSDK.getInstance(
"Y2aiRtzS3",  // ThriveStack productId
"9lJI6t6ue",  // ThriveStack environmentId
"https://api.dev.app.thrivestack.ai/v1/GetTSDefaultManagementToken", // URL of the enpoint created in section: 'Implement ThriveStack Management Token Retrieval'
true // (Optional) TEST MODE: Enable this in development environments when using the 'Test' feature to verify the integration
);