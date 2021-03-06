import React from 'react';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';
import ChwEditFormProps from './ChwEditFormProps';

const PatientsSeenForm = (props: ChwEditFormProps) => {
  const { report, onSubmit, updateFn, formEvent } = props;

  if (formEvent.status === FormStatus.Submit) {
    return (
      <Box direction={'column'} fill>
        <Spinner size={228} />
      </Box>
    );
  }

  return (
    <Box
      direction={'column'}
      fill
      margin={{ left: 'medium' }}
      overflow={'auto'}
    >
      <Heading level={2}>Patients Seen</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.patientsSeen.oneToFour.male}
            femaleValue={report.report.patientsSeen.oneToFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    oneToFour: {
                      ...report.report.patientsSeen.oneToFour,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    oneToFour: {
                      ...report.report.patientsSeen.oneToFour,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'oneToFour.male'}
            femaleFieldName={'oneToFour.female'}
          />
          <ChwFormField
            label={'5 - 9: '}
            maleValue={report.report.patientsSeen.fiveToNine.male}
            femaleValue={report.report.patientsSeen.fiveToNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fiveToNine: {
                      ...report.report.patientsSeen.fiveToNine,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fiveToNine: {
                      ...report.report.patientsSeen.fiveToNine,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiveToNine.male'}
            femaleFieldName={'fiveToNine.female'}
          />
          <ChwFormField
            label={'10 - 14: '}
            maleValue={report.report.patientsSeen.tenToFourteen.male}
            femaleValue={report.report.patientsSeen.tenToFourteen.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    tenToFourteen: {
                      ...report.report.patientsSeen.tenToFourteen,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    tenToFourteen: {
                      ...report.report.patientsSeen.tenToFourteen,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'tenToFourteen.male'}
            femaleFieldName={'tenToFourteen.female'}
          />
          <ChwFormField
            label={'15 - 19: '}
            maleValue={report.report.patientsSeen.fifteenToNineteen.male}
            femaleValue={report.report.patientsSeen.fifteenToNineteen.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fifteenToNineteen: {
                      ...report.report.patientsSeen.fifteenToNineteen,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fifteenToNineteen: {
                      ...report.report.patientsSeen.fifteenToNineteen,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'fifteenToNineteen.male'}
            femaleFieldName={'fifteenToNineteen.female'}
          />
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'20 - 24: '}
            maleValue={report.report.patientsSeen.twentyToTwentyFour.male}
            femaleValue={report.report.patientsSeen.twentyToTwentyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    twentyToTwentyFour: {
                      ...report.report.patientsSeen.twentyToTwentyFour,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    twentyToTwentyFour: {
                      ...report.report.patientsSeen.twentyToTwentyFour,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyToTwentyFour.male'}
            femaleFieldName={'twentyToTwentyFour.female'}
          />
          <ChwFormField
            label={'25 - 29: '}
            maleValue={report.report.patientsSeen.twentyFiveToTwentyNine.male}
            femaleValue={
              report.report.patientsSeen.twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    twentyFiveToTwentyNine: {
                      ...report.report.patientsSeen.twentyFiveToTwentyNine,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    twentyFiveToTwentyNine: {
                      ...report.report.patientsSeen.twentyFiveToTwentyNine,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyFiveToTwentyNine.male'}
            femaleFieldName={'twentyFiveToTwentyNine.female'}
          />
          <ChwFormField
            label={'30 - 34: '}
            maleValue={report.report.patientsSeen.thirtyToThirtyFour.male}
            femaleValue={report.report.patientsSeen.thirtyToThirtyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    thirtyToThirtyFour: {
                      ...report.report.patientsSeen.thirtyToThirtyFour,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    thirtyToThirtyFour: {
                      ...report.report.patientsSeen.thirtyToThirtyFour,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyToThirtyFour.male'}
            femaleFieldName={'thirtyToThirtyFour.female'}
          />
          <ChwFormField
            label={'35 - 39: '}
            maleValue={report.report.patientsSeen.thirtyFiveToThirtyNine.male}
            femaleValue={
              report.report.patientsSeen.thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    thirtyFiveToThirtyNine: {
                      ...report.report.patientsSeen.thirtyFiveToThirtyNine,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    thirtyFiveToThirtyNine: {
                      ...report.report.patientsSeen.thirtyFiveToThirtyNine,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyFiveToThirtyNine.male'}
            femaleFieldName={'thirtyFiveToThirtyNine.female'}
          />
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'40 - 44: '}
            maleValue={report.report.patientsSeen.fortyToFortyFour.male}
            femaleValue={report.report.patientsSeen.fortyToFortyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fortyToFortyFour: {
                      ...report.report.patientsSeen.fortyToFortyFour,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fortyToFortyFour: {
                      ...report.report.patientsSeen.fortyToFortyFour,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyToFortyFour.male'}
            femaleFieldName={'fortyToFortyFour.female'}
          />
          <ChwFormField
            label={'45 - 49: '}
            maleValue={report.report.patientsSeen.fortyFiveToFortyNine.male}
            femaleValue={report.report.patientsSeen.fortyFiveToFortyNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fortyFiveToFortyNine: {
                      ...report.report.patientsSeen.fortyFiveToFortyNine,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fortyFiveToFortyNine: {
                      ...report.report.patientsSeen.fortyFiveToFortyNine,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyFiveToFortyNine.male'}
            femaleFieldName={'fortyFiveToFortyNine.female'}
          />
          <ChwFormField
            label={'50 - 54: '}
            maleValue={report.report.patientsSeen.fiftyToFiftyFour.male}
            femaleValue={report.report.patientsSeen.fiftyToFiftyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fiftyToFiftyFour: {
                      ...report.report.patientsSeen.fiftyToFiftyFour,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fiftyToFiftyFour: {
                      ...report.report.patientsSeen.fiftyToFiftyFour,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyToFiftyFour.male'}
            femaleFieldName={'fiftyToFiftyFour.female'}
          />
          <ChwFormField
            label={'55 - 59: '}
            maleValue={report.report.patientsSeen.fiftyFiveToFiftyNine.male}
            femaleValue={report.report.patientsSeen.fiftyFiveToFiftyNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fiftyFiveToFiftyNine: {
                      ...report.report.patientsSeen.fiftyFiveToFiftyNine,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    fiftyFiveToFiftyNine: {
                      ...report.report.patientsSeen.fiftyFiveToFiftyNine,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyFiveToFiftyNine.male'}
            femaleFieldName={'fiftyFiveToFiftyNine.female'}
          />
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'60 - 64: '}
            maleValue={report.report.patientsSeen.sixtyToSixtyFour.male}
            femaleValue={report.report.patientsSeen.sixtyToSixtyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    sixtyToSixtyFour: {
                      ...report.report.patientsSeen.sixtyToSixtyFour,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    sixtyToSixtyFour: {
                      ...report.report.patientsSeen.sixtyToSixtyFour,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyToSixtyFour.male'}
            femaleFieldName={'sixtyToSixtyFour.female'}
          />
          <ChwFormField
            label={'65+: '}
            maleValue={report.report.patientsSeen.sixtyFiveOrMore.male}
            femaleValue={report.report.patientsSeen.sixtyFiveOrMore.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    sixtyFiveOrMore: {
                      ...report.report.patientsSeen.sixtyFiveOrMore,
                      male: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  patientsSeen: {
                    ...report.report.patientsSeen,
                    sixtyFiveOrMore: {
                      ...report.report.patientsSeen.sixtyFiveOrMore,
                      female: readEventValueAsNum(e),
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyFiveOrMore.male'}
            femaleFieldName={'sixtyFiveOrMore.female'}
          />
        </Box>
        <Box flex align={'start'} margin={{ left: 'xxsmall', top: 'medium' }}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default PatientsSeenForm;
