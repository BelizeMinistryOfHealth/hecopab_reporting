import React from 'react';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';
import ChwEditFormProps from './ChwEditFormProps';

const HealthEdHomeDutiesForm = (props: ChwEditFormProps) => {
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
        Duties Performed: Health Education Sessions at Home
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
              report.report.dutiesPerformed.healthEdAtHome.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      oneToFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      oneToFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.fifteenToNineteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.fifteenToNineteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.twentyToTwentyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.twentyToTwentyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.thirtyToThirtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.thirtyToThirtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.fortyFiveToFortyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.fortyFiveToFortyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.fiftyFiveToFiftyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.fiftyFiveToFiftyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
              report.report.dutiesPerformed.healthEdAtHome.sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.healthEdAtHome.sixtyFiveOrMore
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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
                    healthEdAtHome: {
                      ...report.report.dutiesPerformed.healthEdAtHome,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.healthEdAtHome
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

export default HealthEdHomeDutiesForm;
