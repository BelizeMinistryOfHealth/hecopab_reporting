import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const FeverRashComplaintsForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Complaints: Fever/Rashes</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.complaints.feverRash.oneToFour.male}
            femaleValue={report.report.complaints.feverRash.oneToFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      oneToFour: {
                        ...report.report.complaints.feverRash.oneToFour,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      oneToFour: {
                        ...report.report.complaints.feverRash.oneToFour,
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
            maleValue={report.report.complaints.feverRash.fiveToNine.male}
            femaleValue={report.report.complaints.feverRash.fiveToNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fiveToNine: {
                        ...report.report.complaints.feverRash.fiveToNine,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fiveToNine: {
                        ...report.report.complaints.feverRash.fiveToNine,
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
            maleValue={report.report.complaints.feverRash.tenToFourteen.male}
            femaleValue={
              report.report.complaints.feverRash.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      tenToFourteen: {
                        ...report.report.complaints.feverRash.tenToFourteen,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      tenToFourteen: {
                        ...report.report.complaints.feverRash.tenToFourteen,
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
            maleValue={
              report.report.complaints.feverRash.fifteenToNineteen.male
            }
            femaleValue={
              report.report.complaints.feverRash.fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fifteenToNineteen: {
                        ...report.report.complaints.feverRash.fifteenToNineteen,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fifteenToNineteen: {
                        ...report.report.complaints.feverRash.fifteenToNineteen,
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
            maleValue={
              report.report.complaints.feverRash.twentyToTwentyFour.male
            }
            femaleValue={
              report.report.complaints.feverRash.twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      twentyToTwentyFour: {
                        ...report.report.complaints.feverRash
                          .twentyToTwentyFour,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      twentyToTwentyFour: {
                        ...report.report.complaints.feverRash
                          .twentyToTwentyFour,
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
              report.report.complaints.feverRash.twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.complaints.feverRash.twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.feverRash
                          .twentyFiveToTwentyNine,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.feverRash
                          .twentyFiveToTwentyNine,
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
            maleValue={
              report.report.complaints.feverRash.thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.complaints.feverRash.thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.feverRash
                          .thirtyToThirtyFour,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.feverRash
                          .thirtyToThirtyFour,
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
              report.report.complaints.feverRash.thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.complaints.feverRash.thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.feverRash
                          .thirtyFiveToThirtyNine,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.feverRash
                          .thirtyFiveToThirtyNine,
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
            maleValue={report.report.complaints.feverRash.fortyToFortyFour.male}
            femaleValue={
              report.report.complaints.feverRash.fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fortyToFortyFour: {
                        ...report.report.complaints.feverRash.fortyToFortyFour,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fortyToFortyFour: {
                        ...report.report.complaints.feverRash.fortyToFortyFour,
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
            maleValue={
              report.report.complaints.feverRash.fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.complaints.feverRash.fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.feverRash
                          .fortyFiveToFortyNine,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.feverRash
                          .fortyFiveToFortyNine,
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
            maleValue={report.report.complaints.feverRash.fiftyToFiftyFour.male}
            femaleValue={
              report.report.complaints.feverRash.fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.feverRash.fiftyToFiftyFour,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.feverRash.fiftyToFiftyFour,
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
            maleValue={
              report.report.complaints.feverRash.fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.complaints.feverRash.fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.feverRash
                          .fiftyFiveToFiftyNine,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.feverRash
                          .fiftyFiveToFiftyNine,
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
            maleValue={report.report.complaints.feverRash.sixtyToSixtyFour.male}
            femaleValue={
              report.report.complaints.feverRash.sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.feverRash.sixtyToSixtyFour,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.feverRash.sixtyToSixtyFour,
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
            maleValue={report.report.complaints.feverRash.sixtyFiveOrMore.male}
            femaleValue={
              report.report.complaints.feverRash.sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.feverRash.sixtyFiveOrMore,
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
                    feverRash: {
                      ...report.report.complaints.feverRash,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.feverRash.sixtyFiveOrMore,
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

export default FeverRashComplaintsForm;
