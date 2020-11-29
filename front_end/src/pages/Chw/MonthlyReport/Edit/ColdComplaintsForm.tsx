import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const ColdComplaintsForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Complaints: Cold/Cough</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.complaints.cold.oneToFour.male}
            femaleValue={report.report.complaints.cold.oneToFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      oneToFour: {
                        ...report.report.complaints.cold.oneToFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      oneToFour: {
                        ...report.report.complaints.cold.oneToFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.fiveToNine.male}
            femaleValue={report.report.complaints.cold.fiveToNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fiveToNine: {
                        ...report.report.complaints.cold.fiveToNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fiveToNine: {
                        ...report.report.complaints.cold.fiveToNine,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.tenToFourteen.male}
            femaleValue={report.report.complaints.cold.tenToFourteen.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      tenToFourteen: {
                        ...report.report.complaints.cold.tenToFourteen,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      tenToFourteen: {
                        ...report.report.complaints.cold.tenToFourteen,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.fifteenToNineteen.male}
            femaleValue={report.report.complaints.cold.fifteenToNineteen.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fifteenToNineteen: {
                        ...report.report.complaints.cold.fifteenToNineteen,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fifteenToNineteen: {
                        ...report.report.complaints.cold.fifteenToNineteen,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.twentyToTwentyFour.male}
            femaleValue={
              report.report.complaints.cold.twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      twentyToTwentyFour: {
                        ...report.report.complaints.cold.twentyToTwentyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      twentyToTwentyFour: {
                        ...report.report.complaints.cold.twentyToTwentyFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={
              report.report.complaints.cold.twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.complaints.cold.twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.cold.twentyFiveToTwentyNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.cold.twentyFiveToTwentyNine,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.thirtyToThirtyFour.male}
            femaleValue={
              report.report.complaints.cold.thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.cold.thirtyToThirtyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.cold.thirtyToThirtyFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={
              report.report.complaints.cold.thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.complaints.cold.thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.cold.thirtyFiveToThirtyNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.cold.thirtyFiveToThirtyNine,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.fortyToFortyFour.male}
            femaleValue={report.report.complaints.cold.fortyToFortyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fortyToFortyFour: {
                        ...report.report.complaints.cold.fortyToFortyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fortyToFortyFour: {
                        ...report.report.complaints.cold.fortyToFortyFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.fortyFiveToFortyNine.male}
            femaleValue={
              report.report.complaints.cold.fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.cold.fortyFiveToFortyNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.cold.fortyFiveToFortyNine,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.fiftyToFiftyFour.male}
            femaleValue={report.report.complaints.cold.fiftyToFiftyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.cold.fiftyToFiftyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.cold.fiftyToFiftyFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.fiftyFiveToFiftyNine.male}
            femaleValue={
              report.report.complaints.cold.fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.cold.fiftyFiveToFiftyNine,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.cold.fiftyFiveToFiftyNine,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.sixtyToSixtyFour.male}
            femaleValue={report.report.complaints.cold.sixtyToSixtyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.cold.sixtyToSixtyFour,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.cold.sixtyToSixtyFour,
                        female: readEventValueAsNum(e),
                      },
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
            maleValue={report.report.complaints.cold.sixtyFiveOrMore.male}
            femaleValue={report.report.complaints.cold.sixtyFiveOrMore.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.cold.sixtyFiveOrMore,
                        male: readEventValueAsNum(e),
                      },
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
                  complaints: {
                    ...report.report.complaints,
                    cold: {
                      ...report.report.complaints.cold,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.cold.sixtyFiveOrMore,
                        female: readEventValueAsNum(e),
                      },
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

export default ColdComplaintsForm;
