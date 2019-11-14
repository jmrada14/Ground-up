import axios from "axios";

export default {
    // Gets all books
    getAllBills: function() {
        return axios.get("/api/bills/all");
    },
    getAllVotingRecord: () => {
        return axios.get("/api/bills/voterecord")
    }
}


