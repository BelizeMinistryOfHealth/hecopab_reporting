import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const HealthEdSchoolsDutiesForm = (props: ChwEditFormProps) => {
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
        Duties Performed: Health Education Sessions in Schools
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
              report.report.dutiesPerformed.healthEdInSchools.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      oneToFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      oneToFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.tenToFourteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.fifteenToNineteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.fifteenToNineteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.twentyToTwentyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.twentyToTwentyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.thirtyToThirtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.thirtyToThirtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.fortyToFortyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools
                .fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools
                .fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.fiftyToFiftyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools
                .fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools
                .fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.sixtyToSixtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
              report.report.dutiesPerformed.healthEdInSchools.sixtyFiveOrMore
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdInSchools.sixtyFiveOrMore
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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
                    healthEdInSchools: {
                      ...report.report.dutiesPerformed.healthEdInSchools,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.healthEdInSchools
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

export default HealthEdSchoolsDutiesForm;
