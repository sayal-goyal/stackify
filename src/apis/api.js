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