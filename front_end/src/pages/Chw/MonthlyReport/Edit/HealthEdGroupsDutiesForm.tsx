import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const HealthEdGroupsDutiesForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>
        Duties Performed: Health Education to Different Groups
      </Heading>
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
              report.report.dutiesPerformed.healthEdWithGroups.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      oneToFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      oneToFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups.tenToFourteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups.tenToFourteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups.fifteenToNineteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups.fifteenToNineteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups
                .twentyToTwentyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups
                .twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups
                .thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups
                .thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups.fortyToFortyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups
                .fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups
                .fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups.fiftyToFiftyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups
                .fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups
                .fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups.sixtyToSixtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
              report.report.dutiesPerformed.healthEdWithGroups.sixtyFiveOrMore
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdWithGroups.sixtyFiveOrMore
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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
                    healthEdWithGroups: {
                      ...report.report.dutiesPerformed.healthEdWithGroups,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.healthEdWithGroups
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

export default HealthEdGroupsDutiesForm;
