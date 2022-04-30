import { IDescription } from "../../interfaces";
import { SPLITTER_DESCRIPTION } from "../../constants";

export function parseDescription(description: string): IDescription {
  const parseDescription = description.split(SPLITTER_DESCRIPTION);
  return {
    title: parseDescription[0].trim(),
    description: parseDescription.length > 1 ? parseDescription[1].trim() : parseDescription[0].trim(),
  };
}

export function getItemStatusProposalById(id: string): string | undefined {
  let result;

  switch (id) {
    case "0":
      result = "created";
      break;
    case "4":
    case "5":
    case "7":
      result = "passed";
      break;
    case "1":
      result = "active";
      break;
    case "2":
    case "3":
    case "6":
      result = "failed";
      break;
    default:
      break;
  }
  return result;
}

export function parseVote(id: string): string | undefined {
  let result;

  switch (id) {
    case "0":
      result = "against";
      break;
    case "1":
      result = "for";
      break;
    case "2":
      result = "abstain";
      break;
  }
  return result;
}
