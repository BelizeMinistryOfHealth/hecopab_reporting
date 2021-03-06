import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const PregnancyTestDutiesForm = (props: ChwEditFormProps) => {
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
              report.report.dutiesPerformed.pregnancyTest.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      oneToFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      oneToFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.fifteenToNineteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.fifteenToNineteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.twentyToTwentyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.twentyToTwentyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.twentyFiveToTwentyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.twentyFiveToTwentyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.thirtyToThirtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.thirtyToThirtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.thirtyFiveToThirtyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.thirtyFiveToThirtyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.fortyFiveToFortyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.fortyFiveToFortyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.fiftyFiveToFiftyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.fiftyFiveToFiftyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
              report.report.dutiesPerformed.pregnancyTest.sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.pregnancyTest.sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.pregnancyTest
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
                    pregnancyTest: {
                      ...report.report.dutiesPerformed.pregnancyTest,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.pregnancyTest
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

export default PregnancyTestDutiesForm;
