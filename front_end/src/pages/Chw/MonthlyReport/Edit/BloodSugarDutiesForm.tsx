import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const BloodSugarDutiesForm = (props: ChwEditFormProps) => {
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
              report.report.dutiesPerformed.bloodSugarChecks.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      oneToFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      oneToFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.tenToFourteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.fifteenToNineteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.fifteenToNineteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.twentyToTwentyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.twentyToTwentyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.thirtyToThirtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.thirtyToThirtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.fortyToFortyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks
                .fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks
                .fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.fiftyToFiftyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks
                .fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks
                .fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.sixtyToSixtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
              report.report.dutiesPerformed.bloodSugarChecks.sixtyFiveOrMore
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.bloodSugarChecks.sixtyFiveOrMore
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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
                    bloodSugarChecks: {
                      ...report.report.dutiesPerformed.bloodSugarChecks,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.bloodSugarChecks
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

export default BloodSugarDutiesForm;
