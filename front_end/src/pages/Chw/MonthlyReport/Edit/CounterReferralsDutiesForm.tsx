import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const CounterReferralsDutiesForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Duties Performed: Counter Referrals</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={
              report.report.dutiesPerformed.counterReferralsReceived.oneToFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived.oneToFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      oneToFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.oneToFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      oneToFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.oneToFour,
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
            maleValue={
              report.report.dutiesPerformed.counterReferralsReceived.fiveToNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived.fiveToNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fiveToNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fiveToNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fiveToNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fiveToNine,
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
            maleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.tenToFourteen,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.tenToFourteen,
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
              report.report.dutiesPerformed.counterReferralsReceived
                .fifteenToNineteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fifteenToNineteen,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fifteenToNineteen,
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
              report.report.dutiesPerformed.counterReferralsReceived
                .twentyToTwentyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.twentyToTwentyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.twentyToTwentyFour,
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
              report.report.dutiesPerformed.counterReferralsReceived
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.twentyFiveToTwentyNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.twentyFiveToTwentyNine,
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
              report.report.dutiesPerformed.counterReferralsReceived
                .thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.thirtyToThirtyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.thirtyToThirtyFour,
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
              report.report.dutiesPerformed.counterReferralsReceived
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.thirtyFiveToThirtyNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.thirtyFiveToThirtyNine,
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
            maleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fortyToFortyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fortyToFortyFour,
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
              report.report.dutiesPerformed.counterReferralsReceived
                .fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fortyFiveToFortyNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fortyFiveToFortyNine,
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
            maleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fiftyToFiftyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fiftyToFiftyFour,
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
              report.report.dutiesPerformed.counterReferralsReceived
                .fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fiftyFiveToFiftyNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.fiftyFiveToFiftyNine,
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
            maleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.sixtyToSixtyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.sixtyToSixtyFour,
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
            maleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.counterReferralsReceived
                .sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.sixtyFiveOrMore,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    counterReferralsReceived: {
                      ...report.report.dutiesPerformed.counterReferralsReceived,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed
                          .counterReferralsReceived.sixtyFiveOrMore,
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

export default CounterReferralsDutiesForm;
