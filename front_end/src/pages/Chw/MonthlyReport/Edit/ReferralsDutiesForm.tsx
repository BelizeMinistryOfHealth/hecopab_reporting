import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const ReferralsDutiesForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Duties Performed: Referrals Given</Heading>
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
              report.report.dutiesPerformed.referralsGiven.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      oneToFour: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .oneToFour,
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
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      oneToFour: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .oneToFour,
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
              report.report.dutiesPerformed.referralsGiven.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .fiveToNine,
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
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .fiveToNine,
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
              report.report.dutiesPerformed.referralsGiven.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .tenToFourteen,
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
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .tenToFourteen,
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
              report.report.dutiesPerformed.referralsGiven.fifteenToNineteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.fifteenToNineteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .fifteenToNineteen,
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
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .fifteenToNineteen,
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
              report.report.dutiesPerformed.referralsGiven.twentyToTwentyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.twentyToTwentyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
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
              report.report.dutiesPerformed.referralsGiven
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.referralsGiven
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.referralsGiven
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
              report.report.dutiesPerformed.referralsGiven.thirtyToThirtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.thirtyToThirtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
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
              report.report.dutiesPerformed.referralsGiven
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.referralsGiven
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.referralsGiven
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
            maleValue={
              report.report.dutiesPerformed.referralsGiven.fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .fortyToFortyFour,
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
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .fortyToFortyFour,
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
              report.report.dutiesPerformed.referralsGiven.fortyFiveToFortyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.fortyFiveToFortyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.referralsGiven
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.referralsGiven
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
            maleValue={
              report.report.dutiesPerformed.referralsGiven.fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .fiftyToFiftyFour,
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
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .fiftyToFiftyFour,
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
              report.report.dutiesPerformed.referralsGiven.fiftyFiveToFiftyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.fiftyFiveToFiftyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.referralsGiven
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.referralsGiven
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
            maleValue={
              report.report.dutiesPerformed.referralsGiven.sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .sixtyToSixtyFour,
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
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .sixtyToSixtyFour,
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
              report.report.dutiesPerformed.referralsGiven.sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.referralsGiven.sixtyFiveOrMore
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .sixtyFiveOrMore,
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
                    referralsGiven: {
                      ...report.report.dutiesPerformed.referralsGiven,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.referralsGiven
                          .sixtyFiveOrMore,
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

export default ReferralsDutiesForm;
