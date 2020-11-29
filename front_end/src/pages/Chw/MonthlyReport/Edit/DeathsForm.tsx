import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const DeathsForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Deaths</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.deaths.oneToFour.male}
            femaleValue={report.report.deaths.oneToFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    oneToFour: {
                      ...report.report.deaths.oneToFour,
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
                  deaths: {
                    ...report.report.deaths,
                    oneToFour: {
                      ...report.report.deaths.oneToFour,
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
            maleValue={report.report.deaths.fiveToNine.male}
            femaleValue={report.report.deaths.fiveToNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    fiveToNine: {
                      ...report.report.deaths.fiveToNine,
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
                  deaths: {
                    ...report.report.deaths,
                    fiveToNine: {
                      ...report.report.deaths.fiveToNine,
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
            maleValue={report.report.deaths.tenToFourteen.male}
            femaleValue={report.report.deaths.tenToFourteen.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    tenToFourteen: {
                      ...report.report.deaths.tenToFourteen,
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
                  deaths: {
                    ...report.report.deaths,
                    tenToFourteen: {
                      ...report.report.deaths.tenToFourteen,
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
            maleValue={report.report.deaths.fifteenToNineteen.male}
            femaleValue={report.report.deaths.fifteenToNineteen.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    fifteenToNineteen: {
                      ...report.report.deaths.fifteenToNineteen,
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
                  deaths: {
                    ...report.report.deaths,
                    fifteenToNineteen: {
                      ...report.report.deaths.fifteenToNineteen,
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
            maleValue={report.report.deaths.twentyToTwentyFour.male}
            femaleValue={report.report.deaths.twentyToTwentyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    twentyToTwentyFour: {
                      ...report.report.deaths.twentyToTwentyFour,
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
                  deaths: {
                    ...report.report.deaths,
                    twentyToTwentyFour: {
                      ...report.report.deaths.twentyToTwentyFour,
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
            maleValue={report.report.deaths.twentyFiveToTwentyNine.male}
            femaleValue={report.report.deaths.twentyFiveToTwentyNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    twentyFiveToTwentyNine: {
                      ...report.report.deaths.twentyFiveToTwentyNine,
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
                  deaths: {
                    ...report.report.deaths,
                    twentyFiveToTwentyNine: {
                      ...report.report.deaths.twentyFiveToTwentyNine,
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
            maleValue={report.report.deaths.thirtyToThirtyFour.male}
            femaleValue={report.report.deaths.thirtyToThirtyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    thirtyToThirtyFour: {
                      ...report.report.deaths.thirtyToThirtyFour,
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
                  deaths: {
                    ...report.report.deaths,
                    thirtyToThirtyFour: {
                      ...report.report.deaths.thirtyToThirtyFour,
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
            maleValue={report.report.deaths.thirtyFiveToThirtyNine.male}
            femaleValue={report.report.deaths.thirtyFiveToThirtyNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    thirtyFiveToThirtyNine: {
                      ...report.report.deaths.thirtyFiveToThirtyNine,
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
                  deaths: {
                    ...report.report.deaths,
                    thirtyFiveToThirtyNine: {
                      ...report.report.deaths.thirtyFiveToThirtyNine,
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
            maleValue={report.report.deaths.fortyToFortyFour.male}
            femaleValue={report.report.deaths.fortyToFortyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    fortyToFortyFour: {
                      ...report.report.deaths.fortyToFortyFour,
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
                  deaths: {
                    ...report.report.deaths,
                    fortyToFortyFour: {
                      ...report.report.deaths.fortyToFortyFour,
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
            maleValue={report.report.deaths.fortyFiveToFortyNine.male}
            femaleValue={report.report.deaths.fortyFiveToFortyNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    fortyFiveToFortyNine: {
                      ...report.report.deaths.fortyFiveToFortyNine,
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
                  deaths: {
                    ...report.report.deaths,
                    fortyFiveToFortyNine: {
                      ...report.report.deaths.fortyFiveToFortyNine,
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
            maleValue={report.report.deaths.fiftyToFiftyFour.male}
            femaleValue={report.report.deaths.fiftyToFiftyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    fiftyToFiftyFour: {
                      ...report.report.deaths.fiftyToFiftyFour,
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
                  deaths: {
                    ...report.report.deaths,
                    fiftyToFiftyFour: {
                      ...report.report.deaths.fiftyToFiftyFour,
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
            maleValue={report.report.deaths.fiftyFiveToFiftyNine.male}
            femaleValue={report.report.deaths.fiftyFiveToFiftyNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    fiftyFiveToFiftyNine: {
                      ...report.report.deaths.fiftyFiveToFiftyNine,
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
                  deaths: {
                    ...report.report.deaths,
                    fiftyFiveToFiftyNine: {
                      ...report.report.deaths.fiftyFiveToFiftyNine,
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
            maleValue={report.report.deaths.sixtyToSixtyFour.male}
            femaleValue={report.report.deaths.sixtyToSixtyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    sixtyToSixtyFour: {
                      ...report.report.deaths.sixtyToSixtyFour,
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
                  deaths: {
                    ...report.report.deaths,
                    sixtyToSixtyFour: {
                      ...report.report.deaths.sixtyToSixtyFour,
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
            maleValue={report.report.deaths.sixtyFiveOrMore.male}
            femaleValue={report.report.deaths.sixtyFiveOrMore.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  deaths: {
                    ...report.report.deaths,
                    sixtyFiveOrMore: {
                      ...report.report.deaths.sixtyFiveOrMore,
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
                  deaths: {
                    ...report.report.deaths,
                    sixtyFiveOrMore: {
                      ...report.report.deaths.sixtyFiveOrMore,
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

export default DeathsForm;
