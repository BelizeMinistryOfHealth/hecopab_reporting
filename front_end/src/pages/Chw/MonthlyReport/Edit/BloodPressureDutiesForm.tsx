import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const BloodPressureDutiesForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Duties Performed: Blood Pressure Checks</Heading>
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
              report.report.dutiesPerformed.bloodPressureChecks.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      oneToFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      oneToFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks.fiveToNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks.tenToFourteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks.tenToFourteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks
                .fifteenToNineteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks
                .fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks
                .twentyToTwentyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks
                .twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks
                .thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks
                .thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks.fortyToFortyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks
                .fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks
                .fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks.fiftyToFiftyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks
                .fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks
                .fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks.sixtyToSixtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
              report.report.dutiesPerformed.bloodPressureChecks.sixtyFiveOrMore
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodPressureChecks.sixtyFiveOrMore
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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
                    bloodPressureChecks: {
                      ...report.report.dutiesPerformed.bloodPressureChecks,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.bloodPressureChecks
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

export default BloodPressureDutiesForm;
