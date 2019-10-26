const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
     billID: {type: String, required: true},
     title: {type: String, required: true},
     sponsorState: {type: String, required: true},
     sponsorParty: {type: String, required: true},
     summary: {type: String},
     primarySubject: {type: String, required: true}
});

/*

object we receive from api:
             "bill_id": "hr2621-116",
                 "bill_slug": "hr2621",
                 "bill_type": "hr",
                 "number": "H.R.2621",
                 "bill_uri": "https://api.propublica.org/congress/v1/116/bills/hr2621.json",
                 "title": "To direct the Under Secretary for Intelligence and Analysis of the Department of Homeland Security to develop and disseminate a threat assessment regarding terrorist use of ghost guns, and for other purposes.",
                 "short_title": "Homeland Security Assessment of Terrorists Use of Ghost Guns Act",
                 "sponsor_title": "Rep.",
                 "sponsor_id": "R000613",
                 "sponsor_name": "Max Rose",
                 "sponsor_state": "NY",
                 "sponsor_party": "D",
                 "sponsor_uri": "https://api.propublica.org/congress/v1/members/R000613.json",
                 "gpo_pdf_uri": null,
                 "congressdotgov_url": "https://www.congress.gov/bill/116th-congress/house-bill/2621",
                 "govtrack_url": "https://www.govtrack.us/congress/bills/116/hr2621",
                 "introduced_date": "2019-05-09",
                 "active": true,
                 "last_vote": null,
                 "house_passage": null,
                 "senate_passage": null,
                 "enacted": null,
                 "vetoed": null,
                 "cosponsors": 0,
                 "cosponsors_by_party": {},
                 "committees": "House Homeland Security Committee",
                 "committee_codes": ["HSHM"],
                 "subcommittee_codes": [],
                 "primary_subject": "Emergency Management",
                 "summary": "Homeland Security Assessment of Terrorists Use of Ghost Guns Act This bill requires the Department of Homeland Security to annually disseminate a terrorism threat assessment regarding ghost guns (i.e., guns without serial numbers) .",
                 "summary_short": "Homeland Security Assessment of Terrorists Use of Ghost Guns Act This bill requires the Department of Homeland Security to annually disseminate a terrorism threat assessment regarding ghost guns (i.e., guns without serial numbers) .",
                 "latest_major_action_date": "2019-06-10",
                 "latest_major_action": "Supplemental report filed by the Committee on Homeland Security, H. Rept. 116-88, Part II."
              }


 */

const Reps = mongoose.model("Bills", billSchema);

module.exports = Bills;
