const { NoService } = require('./noservice');

// Initialize NoService
const noService = new NoService();

exports.handler = async (event) => {
    try {
        // Get response based on path
        const path = event.path || '/no';
        let responseBody = {};

        if (path === '/reasons') {
            responseBody = { reasons: noService.getAllReasons() };
        } else {
            responseBody = { reason: noService.getRandomReason() };
        }
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(responseBody)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};