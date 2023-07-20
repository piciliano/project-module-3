import { Types } from "mongoose";
import { OccurrenceModel } from "../app/occurrece/entities/Occurrence";
import { TimelineModel } from "../app/timeline/entities/Timeline";
import { PatientModel } from "../app/patient/entities/Patient";
import { UserModel } from "../app/users/entities/User";

  async function deleteOccurrencesForTimeline(timelineId: Types.ObjectId) {
    const timeline = await TimelineModel.findById(timelineId);
    const occurrences = timeline?.ocurrences;
    if (occurrences && occurrences.length > 0) {
      await OccurrenceModel.deleteMany({ _id: { $in: occurrences } }).exec();
    }
  }
  export { deleteOccurrencesForTimeline }
  

  async function deletePatientsAndTimelinesForUsers(userId: Types.ObjectId) {
    const user = await UserModel.findById(userId);
    const patients = user?.patient;
    if (patients && patients.length > 0) {
      for (const patient of patients){
        await deleteTimelinesForPatients(patient);
      }
      await PatientModel.deleteMany({ _id: { $in: patients } }).exec();
    }
  }
  export { deletePatientsAndTimelinesForUsers }

  async function deleteTimelinesForPatients(patientId: Types.ObjectId) {
    const patient = await PatientModel.findById(patientId);
    const timelines = patient?.timelines;
    if (timelines && timelines.length > 0) {
      for (const timeline of timelines) {
        await deleteOccurrencesAndTimeline(timeline);
      }
    }
  }
  export { deleteTimelinesForPatients }
  
  async function deleteOccurrencesAndTimeline(timelineId: Types.ObjectId) {
    const timeline = await TimelineModel.findById(timelineId);
    const occurrences = timeline?.ocurrences;
  
    if (occurrences && occurrences.length > 0) {
      for (const occurrence of occurrences) {
        await deleteOccurrencesForTimeline(occurrence);
      }
      await OccurrenceModel.deleteMany({ _id: { $in: occurrences } }).exec();
    }

    await TimelineModel.deleteOne({ _id: timelineId }).exec();
  }
  export { deleteOccurrencesAndTimeline };
  

