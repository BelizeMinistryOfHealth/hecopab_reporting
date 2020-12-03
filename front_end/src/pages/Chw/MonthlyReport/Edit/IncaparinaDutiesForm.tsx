import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const IncaparinaDutiesForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Duties Performed: Incaparina Distributed</Heading>
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
              report.report.dutiesPerformed.incaparinaDistributed.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed.oneToFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      oneToFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      oneToFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed.fiveToNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed.fiveToNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed.tenToFourteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed.tenToFourteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .fifteenToNineteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .twentyToTwentyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
              report.report.dutiesPerformed.incaparinaDistributed
                .sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.incaparinaDistributed
                .sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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
                    incaparinaDistributed: {
                      ...report.report.dutiesPerformed.incaparinaDistributed,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.incaparinaDistributed
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

export default IncaparinaDutiesForm;
