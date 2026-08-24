//Created to contian the state of the UI



const uiState = {
  divisionMap: new Map(),
  dropdown: null,
  selectedDivisionId: null,
  selectedDivisionName: null
};


export function getUiState() {
  return uiState;
}
