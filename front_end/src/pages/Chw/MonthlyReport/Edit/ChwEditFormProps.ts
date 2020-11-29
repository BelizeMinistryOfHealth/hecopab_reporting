import { ChwMonthlyReportRecord, FormEvent } from '../../../../api/chws';

interface ChwEditFormProps {
  report: ChwMonthlyReportRecord;
  updateFn: (r: ChwMonthlyReportRecord) => void;
  onSubmit: () => void;
  formEvent: FormEvent;
}

export default ChwEditFormProps;
