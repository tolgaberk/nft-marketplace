export const configuration = () => ({
	environment: process.env.NODE_ENV,
	backend_port: parseInt(process.env.BACKEND_PORT || '3000', 10),
});
