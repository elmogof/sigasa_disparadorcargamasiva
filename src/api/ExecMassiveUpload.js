import axios from 'axios';

const ExecMassiveUpload = async () => {
    try {
        const response = await axios.get('http://localhost:3001/StartMassiveAudioUpload');
        console.log(response.data);
        if (response.data.date === process.env.END_UPLOAD_DATE) {
            console.log('Stopping task...');
            process.exit(0);
        }
    } catch (error) {
        console.error(error.message);
    }
}

export default ExecMassiveUpload;